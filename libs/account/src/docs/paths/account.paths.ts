import { applyDecorators } from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiConflictResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiTags,
} from '@nestjs/swagger';
import { AccountSchema } from '../schemas/account.schema';
import { accountTag } from '../tags/tags';
import {
  BadRequestResponse,
  ConflictResponse,
  NotFoundResponse,
  ServerErrorResponse,
} from '../respones';

export function GetAccountDocs() {
  return applyDecorators(
    ApiTags(accountTag.name),
    ApiOkResponse({ type: AccountSchema }),
    ApiBadRequestResponse({ type: BadRequestResponse }),
    ApiConflictResponse({ type: ConflictResponse }),
    ApiNotFoundResponse({ type: NotFoundResponse }),
    ApiInternalServerErrorResponse({ type: ServerErrorResponse }),
  );
}
