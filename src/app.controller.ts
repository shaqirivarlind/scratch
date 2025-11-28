import { Controller, Get } from '@nestjs/common'

@Controller('/app')
export class AppController {
  @Get(['/', '/hi-or-bye'])
  getHiOrBye(): string {
    return 'redirect to: `/hi` or `/bye` under `/app`'
  }

  @Get('/hi')
  getHiThere(): string {
    return 'Hi there!'
  }

  @Get('/bye')
  getByeThere(): string {
    return 'Bye there!'
  }
}