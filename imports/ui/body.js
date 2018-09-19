import {Meteor} from 'meteor/meteor';
import {Templating} from 'meteor/templating';

import {Eits} from '../api/eits.js';

import './body.html';
import './templates/eit_form.js';

var deleteArray=[];
Template.body.onCreated(function bodyOnCreated(){
    Meteor.subscribe('eits');
});

Template.body.helpers({
    eitRows(){
        var eits = Eits.find();
        console.log(eits);
        return eits;
    }
});

Template.body.events({
    'click .updateButton'(event){
        var id=event.target.id;
        var eit=Eits.findOne({'_id':id});
        var form=document.querySelector('#eit-form');
        form.id.value=eit._id;
        form.firstName.value=eit.firstName;
        form.lastName.value=eit.lastName;
        form.Gender.value=eit.Gender;
        form.dob.value=eit.dob;
        form.Nationality.value=eit.Nationality;
    },
    'click .deleteCheckbox'(event){
        var id=event.target.value;
        if(event.target.checked){
            deleteArray.push(id);
        }else{
            deleteArray.splice(deleteArray.indexOf(id),1);
        }
    },
    'click #delete'(){
        for (var i=0;i<deleteArray.length;i++){
            Meteor.call('eits.remove',deleteArray[i]);
        }
    }
});