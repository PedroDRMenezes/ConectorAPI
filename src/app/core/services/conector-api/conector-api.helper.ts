import {
  HttpErrorResponse,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { HeaderList } from 'src/app/interfaces/header-list.interface';
import { HttpErrorResponseInterface } from 'src/app/interfaces/http-error-response.interface';
import { HttpOptions } from 'src/app/interfaces/http-options.interface';
import { ObjectLiteral } from 'src/app/interfaces/object-literal.interface';
import { ParametersList } from 'src/app/interfaces/parameter-list.interface';

export class ConectorApiHelper {
  public static setHttpOptionHeader(
    httpOptions: HttpOptions,
    headers: Array<HeaderList>
  ): void {
    if (headers && headers.length > 0) {
      let httpHeaders = new HttpHeaders();
      headers.forEach((object) => {
        httpHeaders = httpHeaders.set(object.label, object.value);
      });
      httpOptions.headers = httpHeaders;
    }
  }

  public static setHttpOptionParameter(
    httpOptions: HttpOptions,
    parameters: Array<ParametersList>
  ): void {
    if (parameters && parameters.length > 0) {
      let httpParams = new HttpParams();
      parameters.forEach((object) => {
        httpParams = httpParams.set(object.label, object.value);
      });
      httpOptions.params = httpParams;
    }
  }

  public static setHttpRequest(
    resquestIn: ObjectLiteral | null
  ): ObjectLiteral {
    if (resquestIn) {
      return resquestIn;
    } else {
      return {};
    }
  }

  public static generateHttpErrorResponseServeSide(
    error: HttpErrorResponse
  ): HttpErrorResponseInterface {
    return {
      error: new Error(
        `Error Code: ${error.status}\nMessage: ${error.message}`
      ),
      details: error,
    };
  }

  public static generateHttpErrorResponseClientSide(
    error: HttpErrorResponse
  ): HttpErrorResponseInterface {
    return {
      error: new Error(`Error: ${error.error.message}`),
      details: error,
    };
  }
}
