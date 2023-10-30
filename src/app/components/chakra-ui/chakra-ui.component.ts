import { Component, OnInit, ViewChild } from '@angular/core';
import { ChakaraServicesService } from '../chakara-services.service';
import { Router } from '@angular/router';
import { MatPaginator } from '@angular/material/paginator';


@Component({
  selector: 'app-chakra-ui',
  templateUrl: './chakra-ui.component.html',
  styleUrls: ['./chakra-ui.component.css']
})
export class ChakraUIComponent implements OnInit {
  character=[];
  length!: number;
  characters: any[] = [];
  nextPage: string = '';
  previousPage: string = '';
  storeCharacter:any;
  isLoading=true;

  constructor(private chakrService:ChakaraServicesService,private router:Router) {
   }
   @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: any;

  ngOnInit(): void {
    this.getAllCharacter();
  }

/**
 * THis Method is used to get the character display in cardview
 */
  getAllCharacter(){
    
    this.chakrService.getCharacter().subscribe(res =>{
      
          let  data= res;
          this.parsed(data)
    
    })

  }
  parsed(data:any){
    this.isLoading=false;
    this.characters = data.results;
    this.nextPage = data.next;
    this.previousPage = data.previous;

    this.length=data['count'];
    this.character=data["results"]
    this.dataSource = this.character

  }
  // navigate to  view-chakra screen
  navigateCharacter(event:any){
     this.router.navigate(['/views',event]);
  }
 
// favourite item store in local storage
  toggleFavorite(character:any) {     
    character = !character;
    const singleCharacter = JSON.parse(localStorage.getItem('character') || '[]');
    console.log(singleCharacter)
    if(singleCharacter){
      singleCharacter.push(this.storeCharacter);

    }
    else {
      const index = singleCharacter.indexOf(this.storeCharacter);
      if (index !== -1) {
        singleCharacter.splice(index, 1);
      }
    }
    localStorage.setItem('singleCharacter', JSON.stringify(character));
  }

}
