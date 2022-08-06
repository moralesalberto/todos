import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todos';
	todos: Array<any> = [];
	baseUrl: string = "http://localhost:3000/books";
	
	async getTodos() {
		const resp = await fetch(this.baseUrl);
		
		const data = await resp.json();
		this.todos = await data;
	}
	
	ngOnInit() {
		this.getTodos();
	}
}
