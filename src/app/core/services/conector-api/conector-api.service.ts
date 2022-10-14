import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { HeaderList } from 'src/app/interfaces/header-list.interface';
import { HttpOptions } from 'src/app/interfaces/http-options.interface';
import { ObjectLiteral } from 'src/app/interfaces/object-literal.interface';
import { ParametersList } from 'src/app/interfaces/parameter-list.interface';
import { ConectorApiHelper } from './conector-api.helper';

@Injectable({
  providedIn: 'root',
})
export class ConectorApiService {
  constructor(private httpClient: HttpClient) {}

  public getApiByHttpClient(
    url: string,
    headers: Array<HeaderList>
  ): Observable<any> {
    let httpOptions: HttpOptions = {};
    ConectorApiHelper.setHttpOptionHeader(httpOptions, headers);
    return this.httpClient
      .get<any>(url, httpOptions)
      .pipe(catchError(this.hendleError));
  }

  public postApiByHttpClient(
    url: string,
    headers: Array<HeaderList>,
    parameters: Array<ParametersList>,
    body: ObjectLiteral
  ): Observable<any> {
    let httpOptions: HttpOptions = {};
    let request: ObjectLiteral = ConectorApiHelper.setHttpRequest(body);
    ConectorApiHelper.setHttpOptionHeader(httpOptions, headers);
    ConectorApiHelper.setHttpOptionParameter(httpOptions, parameters);
    return this.httpClient
      .post<any>(url, request, httpOptions)
      .pipe(catchError(this.hendleError));
  }

  private hendleError(error: HttpErrorResponse): Observable<never> {
    if (error.status === 0) {
      return throwError(() =>
        ConectorApiHelper.generateHttpErrorResponseClientSide(error)
      );
    } else {
      return throwError(() =>
        ConectorApiHelper.generateHttpErrorResponseServeSide(error)
      );
    }
  }
}
