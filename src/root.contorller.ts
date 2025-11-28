import { Controller, Get, Redirect } from '@nestjs/common'
import { AppController } from './app.controller'
import { getControllerPath } from './helper'

@Controller()
export class RootController {
  @Get()
  @Redirect() // URL will be provided dynamically
  redirectToApp(): { url: string; statusCode: number } {
    // Dynamically read path from AppController
    const appPath = getControllerPath(AppController);
    return { url: appPath, statusCode: 302 };
  }
}

// @Controller()
// export class RootController {
//   @Get()
//   redirectToApp(@Res() res: Response): string {
//     return res.redirect('/app')
//   }
// }
