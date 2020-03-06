import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'custom-chart-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css', '../org-tree-common.scss']
})
export class NodeComponent implements OnInit {

  @Input() hideChild: boolean;
  @Input() hasParent: boolean;
  @Input() data: any;

  constructor() { }

  ngOnInit(): void {
  }

}
