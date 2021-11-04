import { Component, OnInit } from '@angular/core';
import { UsersphService } from 'src/app/services/usersph.service';
import { Usersinterface } from './usersinterface';

@Component({
  selector: 'unimi-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  users:Usersinterface[];
  show:boolean =true;
  imglogo:string='assets/img/html5.jpg'
  constructor(private usersService:UsersphService) { }

  ngOnInit(): void {
    this.usersService.getusers().subscribe(data =>{this.users=data;
       console.log(this.users)});
  }
}
