import { Component, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import { Topic } from '../../../models/topic.model';
import { Quote } from '../../../models/quote.model';
import { QuotesService } from '../../../services/quotes/quotes.service';
import { Party } from '../../../models/party.model';
import { Politician } from '../../../models/politician.model';
import { User } from '../../../models/user.model';

@Component({
    selector: 'quote-add-dialog',
    templateUrl: './quote-add-dialog.html',
    styleUrls: ['./quote-add-dialog.css']
  })
  export class QuoteAddDialog {
    topics: Topic[] = [{
      id: -1,
      dateCreated: "",
      title: ""
    }];
    party: Party = {
      id: -1,
      name: "",
      logo: "",
      link: ""
    };
    user: User = {
      id: -1,
      firstname: "",
      lastname: "",
      username: "",
      avatar: ""
    };
    politician: Politician = {
      id : -1,
      firstname: "",
      lastname: "",
      role: "",
      avatar: "",
      votes: -1,
      Party: this.party
    };
    quote: Quote = {
      id: 1,
      title: "",
      description: "",
      status: "",
      topics: this.topics,
      votes: 0,
      dateCreated: new Date(),
      dateQuote: null,
      source: "",
      party: this.party,
      user: this.user,
      politician: this.politician
    };
    
    firstFormGroup: FormGroup;
    secondFormGroup: FormGroup;  

    constructor(
      public quotesSvc: QuotesService,
      public dialogRef: MatDialogRef<QuoteAddDialog>,
      private _formBuilder: FormBuilder,
      @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

    ngOnInit() {
      this.firstFormGroup = this._formBuilder.group({
        firstCtrl: ['', Validators.required]
      });
      this.secondFormGroup = this._formBuilder.group({
        secondCtrl: ['', Validators.required]
      });
    }
  
    onNoClick(): void {
      this.dialogRef.close();
    }

    addQuote(): void {
      this.quotesSvc.addQuote(this.quote);
      this.dialogRef.close();      
    }
  
  }