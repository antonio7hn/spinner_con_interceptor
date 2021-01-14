import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PostComponent } from './components/posts/post.component';
import { PostsdetallesComponent } from './components/postsdetalles/postsdetalles.component';

const routes: Routes = [
    { path: '', component: PostComponent },
    { path: 'postsdetalles', component: PostsdetallesComponent },
    { path: '**', component: PostComponent },

    //{ path: 'path/:routeParam', component: MyComponent },
    //{ path: 'staticPath', component: ... },
    //{ path: '**', component: ... },
    //{ path: 'oldPath', redirectTo: '/staticPath' },
    //{ path: ..., component: ..., data: { message: 'Custom' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
