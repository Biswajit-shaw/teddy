import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss'
})
export class QuestionComponent {

  number: any = 0;
  constructor(private router: Router){}

  done(){
    console.log("hello")
    this.router.navigate(['/final'])
  }

  change(){
    this.number = this.number + 1;
    if(this.number == 9){
      this.number = 4;
    }
    console.log(this.number)
  }


}
