import { Component, OnInit } from '@angular/core';
import { AppApiService } from 'src/app/core/app-api.service';
import { Username } from '../../interfaces/user';


@Component({
  selector: 'app-emails',
  templateUrl: './emails.component.html',
  styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {

  emails:any
  username:string="aluno"
  password:string="fiapsecurity"



  constructor(
    private appApiService: AppApiService,
  ) { 
  }

  ngOnInit(): void {
    this.appApiService.logar(this.username, this.password)  
    this.appApiService.getAllEmails().subscribe(
      (data) => {
         console.log(data)
         this.emails = data
       },
       (error) => {
         console.log(error)
       })
   }

  }
