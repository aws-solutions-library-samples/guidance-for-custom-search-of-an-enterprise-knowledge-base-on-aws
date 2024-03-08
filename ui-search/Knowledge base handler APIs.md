## Knowledge base handler APIs

| Function Desc     | method | pathname                           | params/args/body                                                                                                           | response                               |
| ----------------- | ------ | ---------------------------------- | -------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| get index names   | GET    | /knowledge_base_handler/indices    | none                                                                                                                       |                                        |
| get presigned url | POST   | /knowledge_base_handler/presignurl | { “sourceKey”: {jobUUId}/upload/{document.name},“fileName”:document.name,“contentType”: document.type }                    | { uploadUrl:string, sourceKey:string } |
| create a job      | POST   | /knowledge_base_handler/jobs       | index:string;language:string;id:string;fileName:string;jobStatus:'UPLOADED',contentType:'application/pdf',sourceKey:string | none                                   |
| get jobs          | GET    | /knowledge_base_handler/jobs       | Job[]                                                                                                                      |                                        |
