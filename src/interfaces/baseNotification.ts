/**
 * Gamer One API Documentation
 * Welcome to the Official Gamer One API documentation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: developer@g1.gg
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface BaseNotification {
  /**
   * UUID for the notification ID
   */
  id: string;
  /**
   * Notification generater. Identifies what type of notification this is
   */
  type: NoficationType;
  /**
   * Indicates when the notification is marked as read. Null if the notification is unread.
   */
  readAt: Date;
  /**
   * Indicates when the notification created
   */
  createdAt: Date;
}

export type NoficationType =
  | 'G1\\Notifications\\PostMention'
  | 'G1\\Notifications\\SquadRequest'
  | 'G1\\Notifications\\SquadRequestAccepted';

export enum NoficationTypeEnum {
  PostMention = 'G1\\Notifications\\PostMention',
  SquadRequest = 'G1\\Notifications\\SquadRequest',
  SquadRequestAccepted = 'G1\\Notifications\\SquadRequestAccepted',
}
