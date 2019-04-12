import { Component, OnInit } from '@angular/core';
import {RetrievedataService} from '../../services/retrievedata.service';
import { PetOwner, Pet } from '../../models/pet-owner';

@Component({
  selector: 'app-viewcatlist',
  templateUrl: './viewcatlist.component.html',
  styleUrls: ['./viewcatlist.component.scss']
})
export class ViewcatlistComponent implements OnInit {

  mainDataList: PetOwner[]=[];
  maleCatList: Pet[]=[];
  femaleCatList: Pet[]=[];

  constructor(private _retrieveDataService: RetrievedataService) { }

  ngOnInit() {
    var _self = this;
    this._retrieveDataService.getMainList().subscribe(
      dataList => {
        _self.mainDataList.push(...dataList);
        _self.processMainList();
      },
      error => console.log("Error @_retrieveDataService.getMainList::"+error)
    );
  }
  processMainList() {
    var maleOwners = this.mainDataList.filter((petOwner)=>{return petOwner.gender == "Male"});  
    var femaleOwners = this.mainDataList.filter((petOwner)=>{return petOwner.gender == "Female"});
    this.maleCatList.push(...this.extractCatList(maleOwners));
    this.femaleCatList.push(...this.extractCatList(femaleOwners));
  }
  extractCatList(owners: PetOwner[]) : Pet[] {
    var pets : Pet[] = [];
    owners.forEach(owner =>{
      var cats = owner && owner.pets ? owner.pets.filter((pet) => { return pet.type == "Cat" }) : null;
      if(cats && cats.length > 0){
        pets.push(...cats);
      }
    });
    return pets.sort((a,b)=>( a.name < b.name ? -1 : 1));
  }

}
