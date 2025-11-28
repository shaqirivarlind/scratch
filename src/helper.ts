import { Type } from '@nestjs/common'

// Helper function to read a controller path
function getControllerPath(controller: Type): string {
  // NestJS stores the controller path in metadata key 'path'
  return Reflect.getMetadata('path', controller) || '/'
}

export { getControllerPath }
