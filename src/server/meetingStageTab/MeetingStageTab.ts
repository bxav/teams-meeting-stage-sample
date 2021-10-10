import { PreventIframe } from "express-msteams-host";

/**
 * Used as place holder for the decorators
 */
@PreventIframe("/meetingStageTab/index.html")
@PreventIframe("/meetingStageTab/config.html")
@PreventIframe("/meetingStageTab/remove.html")
export class MeetingStageTab {
}
