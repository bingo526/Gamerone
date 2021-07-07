/**
 * Gamer One API Documentation
 * Welcome to the Official Gamer One API documentation.
 *
 * OpenAPI spec version: 1.0.0
 * Contact: developer@gamerone.gg
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export type Visibility =
  | 'public'
  | 'followers'
  | 'friends'
  | 'squad'
  | 'private';

export enum VisibilityEnum {
  Public = 'public',
  Followers = 'followers',
  Friends = 'friends',
  Squad = 'squad',
  Private = 'private',
}

export interface UserPrivacy {
  /**
   * Who can see your first and last name.
   */
  nameVisibility?: Visibility;
  /**
   * Who can see your posts by default
   */
  postVisibility?: Visibility;
  /**
   * Who can see your gamertag by default
   */
  gamertagVisibility?: Visibility;
}
