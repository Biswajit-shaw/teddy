import { Routes } from '@angular/router';
import { FinalComponent } from './final/final.component';
import { QuestionComponent } from './question/question.component';

export const routes: Routes = [
    { path: '', component: QuestionComponent},
    { path: 'final', component: FinalComponent}
];
