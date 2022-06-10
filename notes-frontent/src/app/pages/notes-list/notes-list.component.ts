import { animate, query, stagger, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { scan } from 'rxjs';
import { Note } from 'src/app/shared/note.model';
import { NotesService } from 'src/app/shared/notes.service';


@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss'],
  animations: [
    trigger('itemAnim',[
      //entry animation
      transition('void => *',[
        //initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          //we have to expand out the padding props
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }),
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*' ,
          paddingTop: '*',
          paddingBottom: '*',
          paddingRight: '*',
          paddingLeft: '*',
        })),
        animate(68)
      ]),

      transition('* => void',[
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        //then scale down back to normal size
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75,

        })),
        //scale down and fade out
        animate('120ms ease-out',style({
          transform: 'scale(0.68)',
          opacity: 0
        })),
        //then animate spaceing which includes height, margin, and padding
        animate('150ms ease-out', style({
          opacity: 0,
          height: 0,
          'margin-bottom': 0 ,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *',[
        query(':enter', [
          style({
            opacity: 0,
            height: 0

          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional:true
        })
      ])
    ])
  ]
})
export class NotesListComponent implements OnInit {

  notes: Note[] = new Array<Note>();
  filteredNotes: Note[] = new Array<Note>();

  @ViewChild('filterInput') filterInputElRef !: ElementRef<HTMLInputElement>

  constructor(private notesService: NotesService) { }

  ngOnInit(): void {
    //want to retreive all notes from NotesService
    this.notes = this.notesService.getAll();
    this.filteredNotes = this.notes;
  }

  deleteNote(note: Note){
    let noteId = this.notesService.getId(note);
    this.notesService.delete(noteId);
    this.filter(this.filterInputElRef.nativeElement.value);
  }

  generateNoteURL(note: Note){
    let noteId = this.notesService.getId(note);
    return noteId;
  }


  filter(query : string){

    let allResults: Note[] = new Array<Note>();
    query = query.toLowerCase().trim();
    let terms: string[] = query.split(' '); //split on spaces
    //remove duplicate search terms
    terms = this.removeDuplicates(terms);
    //compile all relevant results into the allResults array
    terms.forEach(term => {
      let results: Note[] = this.relevantNotes(term);
      allResults = [...allResults, ...results]
    } );

    //allResults will include duplicate notes, this is because
    //a particular note can be the result of many search terms
    //but we dont want to show the same not multiple times on the UI
    //first: remove duplicates

    let uniqueResults = this.removeDuplicates(allResults);

    this.filteredNotes = uniqueResults;

    this.sortByRelevancy(allResults);


  }

  removeDuplicates(arr: Array<any>) : Array<any>{
    let uniqueResults: Set<any> = new Set<any>();
    //loop through the input array
    arr.forEach((e => uniqueResults.add(e)));
    
    return Array.from(uniqueResults)

  }

  relevantNotes(query: any) : Array<Note> {
    query = query.toLowerCase().trim();
    let relevantNotes = this.notes.filter(note => {
      if (note.title && note.title.toLowerCase().includes(query)){
        return true;
      }
      if (note.body && note.body.toLowerCase().includes(query)){
        return true;
      }
      else {return false;}
    })
    
    return relevantNotes;
  }

  sortByRelevancy(searchResults: Note[]) {
    //calculated the relevancy of the note based on the number of times it appears in the search results

    let noteCountObj: any = {}; //format - key value => NoteId: number (note object id : count)
    searchResults.forEach((note) => {
      let noteId = this.notesService.getId(note);
      if(noteCountObj[noteId]){
        noteCountObj[noteId] += 1;
      
      }
      else {
        noteCountObj[noteId] = 1;
      }
    })
    this.filteredNotes = this.filteredNotes.sort((a: Note, b: Note) => {
      let aId = this.notesService.getId(a);
      let bId = this.notesService.getId(b);

      let aCount = noteCountObj[aId];
      let bCount = noteCountObj[bId];

      return bCount - aCount;
    });
  }

}
