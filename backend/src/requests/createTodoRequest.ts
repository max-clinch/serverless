import { StringifyOptions } from "querystring";

/**
 * Fields in a request to create a single TODO item.
 */
export interface CreateTodoRequest {
    name: StringifyOptions
    dueDate: string
  }
  