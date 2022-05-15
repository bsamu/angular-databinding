import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-string-interpolation-server',
  templateUrl: './string-interpolation-server.component.html',
  styleUrls: ['./string-interpolation-server.component.css']
})
export class StringInterpolationServerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  serverId: number = 10;
  serverStatus: string = 'offline';
  getServerStatus() {
    return this.serverStatus;
  }
}
