import { Component, OnInit } from '@angular/core';
import {FormList} from '../assets/form-list';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  selectedForm = [];
  listArray = FormList;

  ngOnInit() {
    this.requiredForm();
  }

  // Show mandatory form
  requiredForm() {
    this.listArray.forEach(item => {
      if (item.default === true) {
        this.selectedForm.push(item);
      }
    });
  }

  // if checkbox is checked form is added and if checkbox is unchecked form is removed
  showform(e) {
    if (e.target.checked) {
      this.listArray.forEach(item => {
        if (item.id === e.target.id) {
          this.selectedForm.push(item);
        }
      });
    } else {
      const index = this.selectedForm.findIndex(x => x.id === e.target.id);
      this.selectedForm.splice(index, 1);
    }
  }

}
