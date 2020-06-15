import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-grandchild',
  templateUrl: './grandchild.component.html',
  styleUrls: ['./grandchild.component.css']
})
export class GrandchildComponent implements OnInit {

  constructor(private translate: TranslateService) { }

  ngOnInit(): void {
    console.log(this.translate.instant('grandchild'));
  }

}
