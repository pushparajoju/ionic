import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  constructor() { }
  public form = [
    { val: 'Java', isChecked: true },
    { val: 'Python', isChecked: true },
    { val: 'Javascript', isChecked: false },
    { val: 'CPP', isChecked: false }
  ];

  ngOnInit() {
  }

}
