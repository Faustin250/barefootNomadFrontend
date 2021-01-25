import React, { Component } from 'react'
import { connect } from 'react-redux'
import TextInput from './form/TextInput'
import { updateUsersProfile } from '../actions/user';

export class EditProfile extends Component {
            state ={
                userInfo:{}
            }
        info =this.props.profile;
        
            componentDidMount(){
                this.setState({userInfo:this.info});
            }
            handleInput = (e)=> {
                const prop = e.target
                this.setState({ userInfo: { ...this.state.userInfo, [prop.name]: e.target.value } })
            }
            updateProfile = ()=>{
                updateUsersProfile(this.state.userInfo)
            }
    render() {
        const {userInfo} = this.state;
            const rowClass =
            "flex flex-col sm:flex-row justify-between items-center sm:items-start py-3 border-t border-gray-300 last:border-none"
        const leftClass = "w-full sm:w-1/3 font-medium text-center sm:text-left font-normal text-gray-600 text-sm"
        const rightClass = "flex-1 text-center sm:text-left font-normal text-gray-600 text-sm"

        return (
            <div className=" flex justify-center mt-16 ">

                <div className="rounded overflow-hidden shadow-lg my-2 w-full md:w-5/12  bg-white ">
                    <div className="px-6 py-4 w-full">
                        <div className="w-full">
                            <div className="mt-4">
                                <div className="mb-3">
                                    <TextInput onInput={this.handleInput} label='first Name' name='firstName' value={this.state.userInfo.firstName} />
                                </div>
                                <div className="mb-3">
                                    <TextInput onInput={this.handleInput} label='Last Name' name='lastName' value={this.state.userInfo.lastName} />
                                </div>
                                <div className="mb-3">
                                    <TextInput onInput={this.handleInput} label='email' name='email' value={this.state.userInfo.email} />
                                </div>
                                <div className="mb-3">
                                    <TextInput onInput={this.handleInput} label='language ' name='preferedLanguage' value={this.state.userInfo.preferedLanguage} />
                                </div>
                                <div className="flex justify-center">
                                    <button onClick={this.updateProfile} className="bg-white hover:bg-gray-100 px-1 py-1.5 w-full border-2 border-gray-400 rounded shadow font-normal text-gray-600 text-sm">
                                            Update Profile
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({ profile:state.userProfile });

export default connect(mapStateToProps)(EditProfile)


// firstName, lastName, email, preferedLanguage, officeAddress