import {Meteor} from 'meteor/meteor';
import {Mongo} from 'meteor/mongo';
import {check} from 'meteor/check';


export const Eits = new Mongo.Collection('eits');

if(Meteor.isServer){
    Meteor.publish('eits', function eitsPublication(){
        return Eits.find();
    });
}

Meteor.methods({
    'eits.insert'(eitData){
        check(eitData.firstName, String);
        check(eitData.lastName, String);
        check(eitData.dob, String);
        check(eitData.Nationality, String);
        check(eitData.Gender, String);
        Eits.insert(eitData);  
    },

'eits.update'(eitId,eitData){
    check(eitData.firstName,String);
    check(eitData.lastName,String);
    check(eitData.dob,String);
    check(eitData.Nationality,String);
    check(eitData.Gender,String);
    
    Eits.update(eitId,{$set:eitData});
},

'eits.remove'(eitId){
    check(eitId,String);
    Eits.remove(eitId);
}
});