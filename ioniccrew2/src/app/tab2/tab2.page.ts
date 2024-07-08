import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {
    let array1 = ['ali','loic','indra','thomas'] 
    array1.sort()
    
    console.log(array1)
  }

}
