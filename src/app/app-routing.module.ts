import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './components/albums/albums.component';
import { HomeComponent } from './components/home/home.component';
import { InfoComponent } from './components/info/info.component';
import { PostsComponent } from './components/posts/posts.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {
    path:``,component:HomeComponent
  },
  {
    path:`info`,component:InfoComponent
  },
  {
    path:`posts`,component:PostsComponent
  },
  {
    path:`users`,component:UsersComponent
  },
  {
  path:`albums`,component:AlbumsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
