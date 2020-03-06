import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrgTreeComponent } from './org-tree.component';
import { NodeComponent } from './node/node.component';

@NgModule({
  declarations: [OrgTreeComponent, NodeComponent],
  imports: [
    CommonModule
  ],
  exports: [OrgTreeComponent]
})
export class OrgTreeModule { }
