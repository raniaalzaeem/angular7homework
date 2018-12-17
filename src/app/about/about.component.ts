import { Component, OnInit } from '@angular/core';
import { KeyValuePipe } from '@angular/common';
import { element } from '@angular/core/src/render3';

import { DataService } from '../../app/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  title:string="Anguler 7";
  total:number=3+7;
  data=[
    {id:0,name:'rania'},
    {id:1,name:'rania1'},
    {id:2,name:'rania2'},
    {id:3,name:'rania3'}
];


arraydata=[];
arraydata1=[];
arraydata2=[];
arraydata3=[];
arraydata4=[];

counter=1;

isActive=true;
number=10;

value:"";
name="";
x=1;

listdata=this.services.listdata;
datacollection;


  constructor(private services:DataService) { 
    console.log("constructor");

  }

  ngOnInit() {
    this.datacollection=this.services.listdata;
    console.log("ngOnInit");
    console.log(this.services.listdata)
  }

  BtnClick(){
    alert("Angular JS 7");
    //this.title="this title";
  }

  BtnClick1(){
   alert("rania");
    this.arraydata.push({id:"id"+this.counter,name:"list"+this.counter});
    this.counter++;
  }

  BtnClick2(){
    alert("rania");
    let obj={id:"id"+this.counter,name:"list"+this.counter};
     this.arraydata1.push({id:"id"+this.counter,name:"list"+this.counter});
    //this.arraydata1.push(obj);
     this.counter++;
   }
   BtnClick3(){
    this.isActive=!this.isActive;
   }
   printvalue(e){
    console.log('key up',e.target.value)
   }
   ctrlMClicked(){
    console.log('Click ctrl + m')
   }

   BtnClick4(e){
    let obj={name:e.target.value};
    this.arraydata2.push(obj);
    e.target.value="";
   }
   BtnClick5(name){
    this.arraydata3.push({name:name});
   }
   BtnClick6(elem){
    this.arraydata4.push({name:elem.value});
    elem.value=""
   }

   printname(){
    console.log(this.name)
   }
   BtnClick7(){
     this.x+=1;
   }
}
