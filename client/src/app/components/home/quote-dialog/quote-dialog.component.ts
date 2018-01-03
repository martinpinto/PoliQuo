import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Topic } from '../../../models/topic.model';
import { Quote } from '../../../models/quote.model';
import { QuotesService } from '../../../services/quotes/quotes.service';

@Component({
    selector: 'quote-dialog',
    templateUrl: './quote-dialog.html',
    styleUrls: ['./quote-dialog.css']
  })
  export class QuoteDialog {
    topic: Topic = {
      id: 1,
      dateCreated: "",
      title: ""
    };
    quote: Quote = {
      id: 1,
      title: "Test",
      author: "",
      description: "",
      type: "",
      status: "",
      topic: this.topic,
      hashtags: [],
      votes: 0,
      dateCreated: new Date(),
      dateQuote: null,
      source: "",
      party: ""
    };
    
    constructor(
      public quotesService: QuotesService,
      public dialogRef: MatDialogRef<QuoteDialog>,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addQuote(): void {
      this.quotesService.addQuote(this.quote);
      this.dialogRef.close();      
    }
  
  }