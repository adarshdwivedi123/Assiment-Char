import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChakaraServicesService } from '../chakara-services.service';

@Component({
  selector: 'app-view-chakra',
  templateUrl: './view-chakra.component.html',
  styleUrls: ['./view-chakra.component.css']
})
export class ViewChakraComponent implements OnInit {
  currentUrl:any;
  data:any;
  name:any;
  height:any;
  mass:any;
  hair_color:any;
  skin_color:any;
  eye_color:any;
  birth_year:any;
  gender:any;

  constructor(private activateRoute:ActivatedRoute,private httpClient:HttpClient,private chakrService:ChakaraServicesService) {
    this.activateRoute.params.subscribe(res  =>{
      this.currentUrl=res['url']
    this.data = this.currentUrl.split("people/");
      this.getCharcterById();
    })
   
   }

  ngOnInit(): void {
  }



  //THis method is used the get the single character display the detail
  getCharcterById(){
    this.chakrService.getCharacterById( this.data[1]).subscribe(res=>{
        let characterData=res

        // Thismethod is parsed the response
     this.parsedResponse(characterData)

              console.log("strginfgy"+JSON.stringify(res));
    })
  
  }
  parsedResponse(characterData:any){
      this.name=characterData['name']
      this.height=characterData['height'];
      this.mass=characterData['mass'];
      this.hair_color=characterData['hair_color'];
      this.skin_color=characterData['skin_color'];
      this.eye_color=characterData['eye_color'];
      this.birth_year=characterData[' birth_year'];
      this.gender=characterData['gender'];


  }

}
