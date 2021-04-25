import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from '@nestjs/common';
import { json, Request, Response } from 'express';
import { ExceptionPayload } from '../exception-payload';

@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost): any {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();
    const status = exception.getStatus();
    const error = exception.getResponse();
    const payload: ExceptionPayload = {
      status,
      timestamp: new Date().toISOString(),
      path: request.path,
      error,
    };
    response
      .status(status)
      .json(payload);

  }
}