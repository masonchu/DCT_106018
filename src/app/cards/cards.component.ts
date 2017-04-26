import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  constructor(private router: Router,
              private route : ActivatedRoute) { }

  type;

  ngOnInit() {
    // this.route.params.subscribe((params) => {
    //   this.type = params['type'];
    // });

    this.type = this.route.snapshot.params['type'];
  }

  GoFlot() {
    // this.router.navigateByUrl('/charts/flot');
    this.router.navigate(['/charts', 'flot'])
  }

}
