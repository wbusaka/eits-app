import {Meteor} from 'meteor/meteor';
import {Templating} from 'meteor/templating';

import './eit_form.html';

Template.Eit_form.helpers({
    Nationality(){
        return [
            {name:'Kenya'},
            {name:'Nigeria'},
            {name:'Ghana', default:true},
            {name:'Zimbabwe'},
            {name:'South Africa'},
            {name:'Somalia'},
            {name:'Cote d Ivore'},
            {name:'Tanzania'},
            {name:'Sudan'},
            {name:'Gambia'},
            {name:'Mali'},
            {name:'Cameroon'}
        ];
    }
});

Template.Eit_form.events({
    'submit #eit-form' (event){
        event.preventDefault();
        var form = event.target;
        var eitData = {
            firstName: form.firstName.value,
            lastName: form.lastName.value,
            Gender: form.Gender.value,
            dob: form.dob.value,
            Nationality: form.Nationality.value
        };
        var id=form.id.value;
        if(id){
        Meteor.call('eits.update', id,eitData);
        }else{
        Meteor.call('eits.insert',eitData);
        }
        form.reset();
    }
});

