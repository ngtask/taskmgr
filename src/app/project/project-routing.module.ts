import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProjectItemComponent } from './project-item/project-item.component';
import { ProjectListComponent } from './project-list/project-list.component';

const routes: Routes = [
    { path: 'project', component: ProjectListComponent },
    //{ path: 'project-list', component: ProjectListComponent },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProjectRoutingModule {}


