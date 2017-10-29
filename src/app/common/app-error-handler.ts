import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(){
        alert("unexpected error")
        console.log(Error);
    }
 }