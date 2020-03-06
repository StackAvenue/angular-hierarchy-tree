import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-org-tree',
  templateUrl: './org-tree.component.html',
  styleUrls: ['./org-tree.component.css', './org-tree-common.scss']
})
export class OrgTreeComponent implements OnInit {
  @Input() hideChild: boolean;
  @Input() hasParent: boolean;
  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
