import { HttpErrorResponse } from "@angular/common/http";

export interface HttpErrorResponseInterface {
    error: Error,
    details: HttpErrorResponse
}