import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div class='contact-block' >
					<div class='container' >
						<div class='row' >
							<div class='row-container' >
							
								<div class='section-header text-center' >
									<h2 class='animate text-over-block' >Contact Form</h2>
									{/* divider */}
									<div class='divider-draft center' ></div>
									{/* divider */}
									<p>
										For further queries, use the form below!
									</p>
								</div>
							
							</div>
						</div>
						
						<div class='row' >
							<div class='row-container' >
								
								<form id='contact-form' class='contact-form' action="https://formspree.io/f/#" method="POST" data-toggle='validator' >
			
									<div class='row' >
										
										<div class='col-md-6' >
											
											<div class='form-group' >
												<input type='text' class='form-control' placeholder='Name' required name="name"></input>
												
												<div class='help-block with-errors' ></div>
											</div>
										
										</div>
										
										<div class='col-md-6' >
											<div class='form-group' >
												<input type='email' class='form-control' placeholder='Email' required name="email"></input>
							
											</div>
										</div>
										
									</div>
									
									
									<div class='form-group' >
										<textarea rows='5' class='form-control' placeholder='Message' required name="message"></textarea>
										<div class='help-block with-errors' ></div>
									</div>
									
									<div class='form-group text-center' >
                                        <input type="submit" value="Submit" id='btn'/>
									</div>
									
									
								</form>
							</div>
						</div>

						
					</div>
				</div>
  )
}
export default Contact;