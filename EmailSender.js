// const nodemailer = require('nodemailer');
// const dotenv = require('dotenv');
// dotenv.config({});
// console.log(process.env.myEmail)

// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: process.env.myEmail,
//         pass: process.env.password
//     }
// });

// function sendEmail(mailOptions) {
//     transporter.sendMail(mailOptions, function (error, info) {
//         if (error) {
//             console.log(error);
//         } else {
//             console.log('Email sent: ' + info.response);
//         }
//     });
// }

// function emailSender({sendTo,subject,mainText,cName,btnText,btnLink,headingText}){
    
//     let mailOptions = {
//         from: process.env.myEmail,
//         to: sendTo,
//         subject: subject,
//         html: `
//         <!DOCTYPE html
//   PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
// <html dir="ltr" lang="en">

// <head>
//   <meta charset="UTF-8">
//   <meta content="width=device-width, initial-scale=1" name="viewport">
//   <meta name="x-apple-disable-message-reformatting">
//   <meta http-equiv="X-UA-Compatible" content="IE=edge">
//   <meta content="telephone=no" name="format-detection">
//   <title>Thanks for your order!!</title>
//   <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet"><!--<![endif]-->
//   <style type="text/css">
//     .rollover:hover .rollover-first {
//       max-height: 0px !important;
//       display: none !important;
//     }

//     .rollover:hover .rollover-second {
//       max-height: none !important;
//       display: block !important;
//     }

//     .rollover span {
//       font-size: 0px;
//     }

//     u+.body img~div div {
//       display: none;
//     }

//     #outlook a {
//       padding: 0;
//     }

//     span.MsoHyperlink,
//     span.MsoHyperlinkFollowed {
//       color: inherit;
//       mso-style-priority: 99;
//     }

//     a.es-button {
//       mso-style-priority: 100 !important;
//       text-decoration: none !important;
//     }

//     a[x-apple-data-detectors] {
//       color: inherit !important;
//       text-decoration: none !important;
//       font-size: inherit !important;
//       font-family: inherit !important;
//       font-weight: inherit !important;
//       line-height: inherit !important;
//     }

//     .es-desk-hidden {
//       display: none;
//       float: left;
//       overflow: hidden;
//       width: 0;
//       max-height: 0;
//       line-height: 0;
//       mso-hide: all;
//     }

//     .es-button-border:hover>a.es-button {
//       color: #ffffff !important;
//     }

//     td .es-button-border:hover a.es-button-6982 {
//       color: #41de39 !important;
//     }

//     @media only screen and (max-width:600px) {
//       .es-m-p0b {
//         padding-bottom: 0px !important
//       }

//       .es-m-p0r {
//         padding-right: 0px !important
//       }

//       .es-m-p20b {
//         padding-bottom: 20px !important
//       }

//       .es-m-p20b {
//         padding-bottom: 20px !important
//       }

//       .es-m-p0r {
//         padding-right: 0px !important
//       }

//       *[class="gmail-fix"] {
//         display: none !important
//       }

//       p,
//       a {
//         line-height: 150% !important
//       }

//       h1,
//       h1 a {
//         line-height: 120% !important
//       }

//       h2,
//       h2 a {
//         line-height: 120% !important
//       }

//       h3,
//       h3 a {
//         line-height: 120% !important
//       }

//       h4,
//       h4 a {
//         line-height: 120% !important
//       }

//       h5,
//       h5 a {
//         line-height: 120% !important
//       }

//       h6,
//       h6 a {
//         line-height: 120% !important
//       }

//       h1 {
//         font-size: 40px !important;
//         text-align: center
//       }

//       h2 {
//         font-size: 32px !important;
//         text-align: center
//       }

//       h3 {
//         font-size: 24px !important;
//         text-align: center
//       }

//       h4 {
//         font-size: 24px !important;
//         text-align: left
//       }

//       h5 {
//         font-size: 20px !important;
//         text-align: left
//       }

//       h6 {
//         font-size: 16px !important;
//         text-align: left
//       }

//       .es-header-body h1 a,
//       .es-content-body h1 a,
//       .es-footer-body h1 a {
//         font-size: 40px !important
//       }

//       .es-header-body h2 a,
//       .es-content-body h2 a,
//       .es-footer-body h2 a {
//         font-size: 32px !important
//       }

//       .es-header-body h3 a,
//       .es-content-body h3 a,
//       .es-footer-body h3 a {
//         font-size: 24px !important
//       }

//       .es-header-body h4 a,
//       .es-content-body h4 a,
//       .es-footer-body h4 a {
//         font-size: 24px !important
//       }

//       .es-header-body h5 a,
//       .es-content-body h5 a,
//       .es-footer-body h5 a {
//         font-size: 20px !important
//       }

//       .es-header-body h6 a,
//       .es-content-body h6 a,
//       .es-footer-body h6 a {
//         font-size: 16px !important
//       }

//       .es-menu td a {
//         font-size: 12px !important
//       }

//       .es-header-body p,
//       .es-header-body a {
//         font-size: 14px !important
//       }

//       .es-content-body p,
//       .es-content-body a {
//         font-size: 14px !important
//       }

//       .es-footer-body p,
//       .es-footer-body a {
//         font-size: 12px !important
//       }

//       .es-infoblock p,
//       .es-infoblock a {
//         font-size: 12px !important
//       }

//       .es-m-txt-c,
//       .es-m-txt-c h1,
//       .es-m-txt-c h2,
//       .es-m-txt-c h3,
//       .es-m-txt-c h4,
//       .es-m-txt-c h5,
//       .es-m-txt-c h6 {
//         text-align: center !important
//       }

//       .es-m-txt-r,
//       .es-m-txt-r h1,
//       .es-m-txt-r h2,
//       .es-m-txt-r h3,
//       .es-m-txt-r h4,
//       .es-m-txt-r h5,
//       .es-m-txt-r h6 {
//         text-align: right !important
//       }

//       .es-m-txt-j,
//       .es-m-txt-j h1,
//       .es-m-txt-j h2,
//       .es-m-txt-j h3,
//       .es-m-txt-j h4,
//       .es-m-txt-j h5,
//       .es-m-txt-j h6 {
//         text-align: justify !important
//       }

//       .es-m-txt-l,
//       .es-m-txt-l h1,
//       .es-m-txt-l h2,
//       .es-m-txt-l h3,
//       .es-m-txt-l h4,
//       .es-m-txt-l h5,
//       .es-m-txt-l h6 {
//         text-align: left !important
//       }

//       .es-m-txt-r img,
//       .es-m-txt-c img,
//       .es-m-txt-l img {
//         display: inline !important
//       }

//       .es-m-txt-r .rollover:hover .rollover-second,
//       .es-m-txt-c .rollover:hover .rollover-second,
//       .es-m-txt-l .rollover:hover .rollover-second {
//         display: inline !important
//       }

//       .es-m-txt-r .rollover span,
//       .es-m-txt-c .rollover span,
//       .es-m-txt-l .rollover span {
//         line-height: 0 !important;
//         font-size: 0 !important
//       }

//       .es-spacer {
//         display: inline-table
//       }

//       a.es-button,
//       button.es-button {
//         font-size: 16px !important;
//         line-height: 120% !important
//       }

//       a.es-button,
//       button.es-button,
//       .es-button-border {
//         display: inline-block !important
//       }

//       .es-m-fw,
//       .es-m-fw.es-fw,
//       .es-m-fw .es-button {
//         display: block !important
//       }

//       .es-m-il,
//       .es-m-il .es-button,
//       .es-social,
//       .es-social td,
//       .es-menu {
//         display: inline-block !important
//       }

//       .es-adaptive table,
//       .es-left,
//       .es-right {
//         width: 100% !important
//       }

//       .es-content table,
//       .es-header table,
//       .es-footer table,
//       .es-content,
//       .es-footer,
//       .es-header {
//         width: 100% !important;
//         max-width: 600px !important
//       }

//       .adapt-img {
//         width: 100% !important;
//         height: auto !important
//       }

//       .es-mobile-hidden,
//       .es-hidden {
//         display: none !important
//       }

//       .es-desk-hidden {
//         width: auto !important;
//         overflow: visible !important;
//         float: none !important;
//         max-height: inherit !important;
//         line-height: inherit !important
//       }

//       tr.es-desk-hidden {
//         display: table-row !important
//       }

//       table.es-desk-hidden {
//         display: table !important
//       }

//       td.es-desk-menu-hidden {
//         display: table-cell !important
//       }

//       .es-menu td {
//         width: 1% !important
//       }

//       table.es-table-not-adapt,
//       .esd-block-html table {
//         width: auto !important
//       }

//       .es-social td {
//         padding-bottom: 10px
//       }

//       .h-auto {
//         height: auto !important
//       }

//       .es-text-3294,
//       .es-text-3294 p,
//       .es-text-3294 a,
//       .es-text-3294 h1,
//       .es-text-3294 h2,
//       .es-text-3294 h3,
//       .es-text-3294 h4,
//       .es-text-3294 h5,
//       .es-text-3294 h6,
//       .es-text-3294 ul,
//       .es-text-3294 ol,
//       .es-text-3294 li,
//       .es-text-3294 span,
//       .es-text-3294 sup,
//       .es-text-3294 sub,
//       .es-text-3294 u,
//       .es-text-3294 b,
//       .es-text-3294 strong,
//       .es-text-3294 em,
//       .es-text-3294 i {
//         font-size: 22px !important
//       }
//     }

//     @media screen and (max-width:384px) {
//       .mail-message-content {
//         width: 414px !important
//       }
//     }
//   </style>
// </head>

// <body class="body" style="width:100%;height:100%;padding:0;Margin:0">
//   <div dir="ltr" class="es-wrapper-color" lang="en" style="background-color:#EFF7F6"><!--[if gte mso 9]>
// 			<v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
// 				<v:fill type="tile" color="#eff7f6"></v:fill>
// 			</v:background>
// 		<![endif]-->
//     <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
//       style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#EFF7F6">
//       <tr>
//         <td valign="top" style="padding:0;Margin:0">
//           <table cellpadding="0" cellspacing="0" class="es-header" align="center"
//             style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
//             <tr>
//               <td align="center" style="padding:0;Margin:0">
//                 <table bgcolor="#ffffff" class="es-header-body" align="center" cellpadding="0" cellspacing="0"
//                   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
//                   <tr>
//                     <td class="es-m-p0b" align="left" style="padding:20px;Margin:0">
//                       <!--[if mso]><table style="width:560px" cellpadding="0" cellspacing="0"><tr><td style="width:281px" valign="top"><![endif]-->
//                       <table cellpadding="0" cellspacing="0" class="es-left" align="left"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
//                         <tr>
//                           <td class="es-m-p0r es-m-p20b" valign="top" align="center"
//                             style="padding:0;Margin:0;width:261px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="left" class="es-m-txt-c"
//                                   style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0px"><a
//                                     target="_blank" href="https://localhost:5173"
//                                     style="mso-line-height-rule:exactly;text-decoration:underline;color:#222222;font-size:14px"><img
//                                       src="https://fbghayi.stripocdn.email/content/guids/CABINET_c3e0d2f6b613e3f695968b7cd6a69aa0feb488bed24246c36a1b7a25b10c6049/images/logo.png"
//                                       alt="Logo"
//                                       style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"
//                                       height="45" title="Logo" class="adapt-img"></a></td>
//                               </tr>
//                             </table>
//                           </td>
//                           <td class="es-hidden" style="padding:0;Margin:0;width:20px"></td>
//                         </tr>
//                       </table><!--[if mso]></td><td style="width:128px" valign="top"><![endif]-->
//                       <table cellpadding="0" cellspacing="0" class="es-left" align="left"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:left">
//                         <tr class="es-mobile-hidden">
//                           <td align="left" class="es-m-p20b" style="padding:0;Margin:0;width:128px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center" style="padding:0;Margin:0;padding-top:10px"><!--[if mso]><a href="tel:8580760230" target="_blank" hidden>
// 	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="tel:8580760230" 
//                 style="height:39px; v-text-anchor:middle; width:120px" arcsize="13%" stroke="f"  fillcolor="#41de39">
// 		<w:anchorlock></w:anchorlock>
// 		<center style='color:#ffffff; font-family:Raleway, Arial, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Contact</center>
// 	</v:roundrect></a>
// <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide"
//                                     style="border-style:solid;border-color:#386641;background:#41de39;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a
//                                       class="es-button" target="_blank" href="tel:8580760230"
//                                       style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;padding:10px 30px 10px 30px;display:inline-block;background:#41de39;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #41de39">Contact</a></span><!--<![endif]-->
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                       <!--[if mso]></td><td style="width:20px"></td><td style="width:131px" valign="top"><![endif]-->
//                       <table cellpadding="0" cellspacing="0" class="es-right" align="right"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;float:right">
//                         <tr class="es-mobile-hidden">
//                           <td align="left" style="padding:0;Margin:0;width:131px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center" style="padding:0;Margin:0;padding-top:10px"><!--[if mso]><a href="tel:8580760230" target="_blank" hidden>
// 	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href="tel:8580760230" 
//                 style="height:39px; v-text-anchor:middle; width:120px" arcsize="13%" stroke="f"  fillcolor="#41de39">
// 		<w:anchorlock></w:anchorlock>
// 		<center style='color:#ffffff; font-family:Raleway, Arial, sans-serif; font-size:14px; font-weight:400; line-height:14px;  mso-text-raise:1px'>Support</center>
// 	</v:roundrect></a>
// <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide"
//                                     style="border-style:solid;border-color:#386641;background:#41de39;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a
//                                       href="tel:8580760230" class="es-button" target="_blank"
//                                       style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#FFFFFF;font-size:16px;padding:10px 30px 10px 30px;display:inline-block;background:#41de39;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:normal;font-style:normal;line-height:19px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #41de39">Support</a></span><!--<![endif]-->
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table><!--[if mso]></td></tr></table><![endif]-->
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//           <table class="es-content" cellspacing="0" cellpadding="0" align="center"
//             style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
//             <tr>
//               <td align="center" style="padding:0;Margin:0">
//                 <table class="es-content-body"
//                   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#ffffff;width:600px"
//                   cellspacing="0" cellpadding="0" bgcolor="#ffffff" align="center">
//                   <tr>
//                     <td align="left" style="padding:0;Margin:0">
//                       <table cellspacing="0" cellpadding="0" width="100%"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                         <tr>
//                           <td class="es-m-p0r" valign="top" align="center" style="padding:0;Margin:0;width:600px">
//                             <table width="100%" cellspacing="0" cellpadding="0"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="left" class="es-text-3294" bgcolor="#ffffff" style="padding:0;Margin:0">
//                                   <h3 align="center"
//                                     style="Margin:0;font-family:Raleway, Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:22px;font-style:normal;font-weight:normal;line-height:44px !important;color:#41de39">
//                                     <strong>${headingText}</strong></h3>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td align="left" bgcolor="#41de39"
//                       style="Margin:0;padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px;background-color:#41de39">
//                       <table cellpadding="0" cellspacing="0" width="100%"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                         <tr>
//                           <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center" class="es-m-txt-c" style="padding:10px;Margin:0">
//                                   <h3
//                                     style="Margin:0;font-family:Raleway, Arial, sans-serif;mso-line-height-rule:exactly;letter-spacing:0;font-size:24px;font-style:normal;font-weight:normal;line-height:29px;color:#ffffff">
//                                     Hello ${cName},</h3>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:20px">
//                                   <p
//                                     style="Margin:0;mso-line-height-rule:exactly;font-family:tahoma, verdana, segoe, sans-serif;line-height:24px;letter-spacing:0;color:#ffffff;font-size:16px">
//                                     ${mainText}</p>
//                                 </td>
//                               </tr>
//                               <tr>
//                                 <td align="center" class="es-m-txt-c" style="padding:0;Margin:0;padding-top:30px"><!--[if mso]><a href="http://localhost:5173/user" target="_blank" hidden>
// 	<v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" esdevVmlButton href=${btnLink} 
//                 style="height:39px; v-text-anchor:middle; width:143px" arcsize="13%" stroke="f"  fillcolor="#ffffff">
// 		<w:anchorlock></w:anchorlock>
// 		<center style='color:#41de39; font-family:Raleway, Arial, sans-serif; font-size:14px; font-weight:700; line-height:14px;  mso-text-raise:1px'>${btnText}</center>
// 	</v:roundrect></a>
// <![endif]--><!--[if !mso]><!-- --><span class="es-button-border msohide"
//                                     style="border-style:solid;border-color:#ffffff;background:#ffffff;border-width:1px;display:inline-block;border-radius:5px;width:auto;mso-hide:all"><a
//                                       href=${btnLink} class="es-button es-button-6982"
//                                       target="_blank"
//                                       style="mso-style-priority:100 !important;text-decoration:none !important;mso-line-height-rule:exactly;color:#41de39;font-size:16px;padding:10px 30px 10px 30px;display:inline-block;background:#ffffff;border-radius:5px;font-family:Raleway, Arial, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center;letter-spacing:0;mso-padding-alt:0;mso-border-alt:10px solid #6A994E;border-color:#ffffff">${btnText}</a></span><!--<![endif]--></td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//           <table cellpadding="0" cellspacing="0" class="es-footer" align="center"
//             style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important;background-color:transparent;background-repeat:repeat;background-position:center top">
//             <tr>
//               <td align="center" style="padding:0;Margin:0">
//                 <table bgcolor="#ffffff" class="es-footer-body" align="center" cellpadding="0" cellspacing="0"
//                   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:#FFFFFF;width:600px">
//                   <tr>
//                     <td align="left" style="padding:0;Margin:0">
//                       <table cellpadding="0" cellspacing="0" width="100%"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                         <tr>
//                           <td align="center" valign="top" style="padding:0;Margin:0;width:600px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center"
//                                   style="padding:0;Margin:0;padding-top:5px;padding-bottom:5px;font-size:0">
//                                   <table border="0" width="100%" height="100%" cellpadding="0" cellspacing="0"
//                                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                     <tr>
//                                       <td
//                                         style="padding:0;Margin:0;border-bottom:2px solid #eff7f6;background:unset;height:1px;width:100%;margin:0px">
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                   <tr>
//                     <td align="left"
//                       style="Margin:0;padding-top:30px;padding-right:20px;padding-bottom:30px;padding-left:20px">
//                       <table cellpadding="0" cellspacing="0" width="100%"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                         <tr>
//                           <td align="left" style="padding:0;Margin:0;width:560px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center" class="es-m-txt-c"
//                                   style="padding:0;Margin:0;padding-top:20px;padding-bottom:20px;font-size:0">
//                                   <table cellpadding="0" cellspacing="0" class="es-table-not-adapt es-social"
//                                     style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                                     <tr>
//                                       <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a
//                                           target="_blank" href="http://localhost:5173"
//                                           style="mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img
//                                             src="https://fbghayi.stripocdn.email/content/assets/img/social-icons/logo-black/facebook-logo-black.png"
//                                             alt="Fb" title="Facebook" height="24"
//                                             style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
//                                       </td>
//                                       <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a
//                                           target="_blank" href="http://localhost:5173"
//                                           style="mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img
//                                             src="https://fbghayi.stripocdn.email/content/assets/img/social-icons/logo-black/x-logo-black.png"
//                                             alt="X" title="X.com" height="24"
//                                             style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
//                                       </td>
//                                       <td align="center" valign="top" style="padding:0;Margin:0;padding-right:20px"><a
//                                           target="_blank" href="http://localhost:5173"
//                                           style="mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img
//                                             src="https://fbghayi.stripocdn.email/content/assets/img/social-icons/logo-black/youtube-logo-black.png"
//                                             alt="Yt" title="Youtube" height="24"
//                                             style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
//                                       </td>
//                                       <td align="center" valign="top" style="padding:0;Margin:0"><a target="_blank"
//                                           href="http://localhost:5173"
//                                           style="mso-line-height-rule:exactly;text-decoration:underline;color:#6A994E;font-size:12px"><img
//                                             src="https://fbghayi.stripocdn.email/content/assets/img/social-icons/logo-black/instagram-logo-black.png"
//                                             alt="Ig" title="Instagram" height="24"
//                                             style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"></a>
//                                       </td>
//                                     </tr>
//                                   </table>
//                                 </td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//           <table cellpadding="0" cellspacing="0" class="es-content" align="center"
//             style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;width:100%;table-layout:fixed !important">
//             <tr>
//               <td align="center" style="padding:0;Margin:0">
//                 <table class="es-content-body" align="center" cellpadding="0" cellspacing="0"
//                   style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
//                   <tr>
//                     <td align="left" style="padding:20px;Margin:0">
//                       <table cellpadding="0" cellspacing="0" width="100%"
//                         style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                         <tr>
//                           <td align="center" valign="top" style="padding:0;Margin:0;width:560px">
//                             <table cellpadding="0" cellspacing="0" width="100%"
//                               style="mso-table-lspace:0pt;mso-table-rspace:0pt;border-collapse:collapse;border-spacing:0px">
//                               <tr>
//                                 <td align="center" class="es-infoblock made_with"
//                                   style="padding:0;Margin:0;font-size:0"><a target="_blank"
//                                     href="http://localhost:5173"
//                                     style="mso-line-height-rule:exactly;text-decoration:underline;color:#1F1F1F;font-size:12px"><img
//                                       src="https://fbghayi.stripocdn.email/content/guids/CABINET_c3e0d2f6b613e3f695968b7cd6a69aa0feb488bed24246c36a1b7a25b10c6049/images/logo.png"
//                                       alt="" width="125"
//                                       style="display:block;font-size:16px;border:0;outline:none;text-decoration:none"
//                                       class="adapt-img"></a></td>
//                               </tr>
//                             </table>
//                           </td>
//                         </tr>
//                       </table>
//                     </td>
//                   </tr>
//                 </table>
//               </td>
//             </tr>
//           </table>
//         </td>
//       </tr>
//     </table>
//   </div>
// </body>

// </html>
//             `
//     };
//     sendEmail(mailOptions);
// }

// module.exports = emailSender ;
