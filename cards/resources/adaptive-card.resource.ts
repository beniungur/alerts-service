import { TeamsAlertDto } from "../../alerts/dto/teams-alert.dto";

export function getAdaptiveCard(alert: TeamsAlertDto) {
        return {
            "type": "message",
            "attachments":[
            {
                "contentType":"application/vnd.microsoft.card.adaptive",
                "contentUrl":null,
                "content":{
                    "$schema":"http://adaptivecards.io/schemas/adaptive-card.json",
                    "type":"AdaptiveCard",
                    "version":"1.5",
                    "body": [
                        {
                            "type": "RichTextBlock",
                            "inlines": [
                                {
                                    "type": "TextRun",
                                    "weight": "Bolder",
                                    "text": `${alert.environment}: ${alert.title}`
                                }
                            ]
                        },
                        {
                            "type": "TextBlock",
                            "text": `Message: ${alert.message}`,
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": `Status Code: ${alert.code}`,
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": `Severity: ${alert.severity}`,
                            "wrap": true
                        },
                        {
                            "type": "TextBlock",
                            "text": `Time: ${alert.date}`,
                            "wrap": true
                        }
                    ]
                }
            }]
        }
}