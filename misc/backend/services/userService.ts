import {Request, Response} from "express";
import * as mongodb from 'mongodb';
import {User} from '../models/users'

export async function getUsers() {

    const users:Array<User> = await getUsersFromDb();
    return users;
}

export function findUser(users:Array<User>, email):User {
    return users.find((user:User) => user.email === email);
}


async function getUsersFromDb() {


    return new Promise((resolve, reject) => {

        mongodb.connect("mongodb+srv://admin:admin@test-backend-zrbxy.mongodb.net/test?retryWrites=true&w=majority", function (err, client) {
            if(err) throw err;
            console.log('mongodb connected');

            let db = client.db('myDatabase');

            db.collection('myCollection', function (err, collection) {

                collection.find().toArray(function(err, items) {
                    if(err) throw err;

                    resolve(items);
                });

            });


        });
    });
}
