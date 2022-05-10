import { Injectable } from "@angular/core"; // signifca que será acessado a partir do construtor 
import { HttpClient } from "@angular/common/http"; 
import { Digmon } from "../models/digmon.model";
import { environment } from "src/environments/environment";
import { Observable, observable, retry } from "rxjs";

@Injectable({
    providedIn:'root'
})

export class DigmonServices{

    endpoint : string = environment.endPoint;
    constructor(private httpClient: HttpClient){

    }

    getAll() : Observable<Digmon[]>{
        return this.httpClient.get<Digmon[]>(this.endpoint).pipe(retry(1));
    }

    getForName( name : string):Observable<Digmon>{
        return this.httpClient.get<Digmon>(this.endpoint + '/name/' + name).pipe(retry(1))
    }
    getForLevel( level : string):Observable<Digmon>{
        return this.httpClient.get<Digmon>(this.endpoint + '/level/' + level).pipe((retry(1)))
    }
}