"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAdaptiveCard = void 0;
function getAdaptiveCard(alert) {
    return {
        "type": "message",
        "attachments": [
            {
                "contentType": "application/vnd.microsoft.card.adaptive",
                "contentUrl": null,
                "content": {
                    "$schema": "http://adaptivecards.io/schemas/adaptive-card.json",
                    "type": "AdaptiveCard",
                    "version": "1.5",
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
            }
        ]
    };
}
exports.getAdaptiveCard = getAdaptiveCard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRhcHRpdmUtY2FyZC5yZXNvdXJjZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2NhcmRzL3Jlc291cmNlcy9hZGFwdGl2ZS1jYXJkLnJlc291cmNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBLFNBQWdCLGVBQWUsQ0FBQyxLQUFlO0lBQ3ZDLE9BQU87UUFDSCxNQUFNLEVBQUUsU0FBUztRQUNqQixhQUFhLEVBQUM7WUFDZDtnQkFDSSxhQUFhLEVBQUMseUNBQXlDO2dCQUN2RCxZQUFZLEVBQUMsSUFBSTtnQkFDakIsU0FBUyxFQUFDO29CQUNOLFNBQVMsRUFBQyxvREFBb0Q7b0JBQzlELE1BQU0sRUFBQyxjQUFjO29CQUNyQixTQUFTLEVBQUMsS0FBSztvQkFDZixNQUFNLEVBQUU7d0JBQ0o7NEJBQ0ksTUFBTSxFQUFFLGVBQWU7NEJBQ3ZCLFNBQVMsRUFBRTtnQ0FDUDtvQ0FDSSxNQUFNLEVBQUUsU0FBUztvQ0FDakIsUUFBUSxFQUFFLFFBQVE7b0NBQ2xCLE1BQU0sRUFBRSxHQUFHLEtBQUssQ0FBQyxXQUFXLEtBQUssS0FBSyxDQUFDLEtBQUssRUFBRTtpQ0FDakQ7NkJBQ0o7eUJBQ0o7d0JBQ0Q7NEJBQ0ksTUFBTSxFQUFFLFdBQVc7NEJBQ25CLE1BQU0sRUFBRSxZQUFZLEtBQUssQ0FBQyxPQUFPLEVBQUU7NEJBQ25DLE1BQU0sRUFBRSxJQUFJO3lCQUNmO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixNQUFNLEVBQUUsZ0JBQWdCLEtBQUssQ0FBQyxJQUFJLEVBQUU7NEJBQ3BDLE1BQU0sRUFBRSxJQUFJO3lCQUNmO3dCQUNEOzRCQUNJLE1BQU0sRUFBRSxXQUFXOzRCQUNuQixNQUFNLEVBQUUsYUFBYSxLQUFLLENBQUMsUUFBUSxFQUFFOzRCQUNyQyxNQUFNLEVBQUUsSUFBSTt5QkFDZjt3QkFDRDs0QkFDSSxNQUFNLEVBQUUsV0FBVzs0QkFDbkIsTUFBTSxFQUFFLFNBQVMsS0FBSyxDQUFDLElBQUksRUFBRTs0QkFDN0IsTUFBTSxFQUFFLElBQUk7eUJBQ2Y7cUJBQ0o7aUJBQ0o7YUFDSjtTQUFDO0tBQ0wsQ0FBQTtBQUNULENBQUM7QUE5Q0QsMENBOENDIn0=