import { Controller, Post, Body, HttpException, HttpStatus } from '@nestjs/common';

@Controller('ai-agent')
export class AiAgentController {
  @Post('run')
  async runAgent(@Body() params: any) {
    try {
      if (!params || Object.keys(params).length === 0) {
        throw new HttpException('Missing parameters', HttpStatus.BAD_REQUEST);
      }

      // 🧠 Your AI logic here
      return {
        success: true,
        message: 'AI Agent executed successfully',
        params,
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
