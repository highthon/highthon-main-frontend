import React from 'react';
import '../scss/apply.scss';
import Header from '../components/Header'
import {Provider, Subscribe, Container} from "unstated"
import axios from "axios";

/*복구했다 샤랄라*/
export default class Apply extends React.Component {
    render() {
        return(
            <Provider>
                <ApplyItemWithUnstated />
            </Provider>
        )
    }
    /*    onSubmit = e => {
            e.preventDefault()
            const {name, school, grade, sex, phoneNum, email, field, role} = this.state
        }*/
}

class ApplyContainer extends Container {
    state = {
        persons: [],
        name: '',
        school: '',
        grade: '',
        sex: '',
        phoneNum: '',
        email: '',
        field: '',
        role: ''
    };

    loadData = () => {
        axios.post("http://api.beta.highthon.kr", {
            name: this.state.name,
            school: this.state.school,
            grade: this.state.grade,
            sex: this.state.sex,
            phoneNum: this.state.phoneNum,
            email: this.state.email,
            field: this.state.field,
            role: this.state.role
        }).then(response => {
            const persons = response.data;
            console.log(persons)
        })
    }
}

const ApplyItemWithUnstated = function (props) {
    return (
        <Subscribe to={[ApplyContainer]}>
            {container => (
                <React.Fragment>
                    <ApplyItem onApplyButtonClick={() => container.loadData()}/>
                    <ApplyResult persons={container.state.persons}/>
                </React.Fragment>
            )}
        </Subscribe>
    )
}

class ApplyItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="apply-wrap">
                    <div className="apply-box">
                        <Header/>
                        <div className="content-wrap">
                            <div className="form-wrap">
                                <h1>신청하기</h1>
                                <form className="apply-form" onSubmit={this.props.onApplyButtonClick}>
                                    <div className="apply-form-first">
                                        <div className="first-box">
                                            이름 <input type="text" name="name" /><br/>
                                            학교 <input type="text" name="school" /><br/>
                                            학년 <select name="grade" value="grade">
                                            <option name="third" selected>3학년</option>
                                            <option name="second">2학년</option>
                                            <option name="first">1학년</option>
                                        </select>

                                            성별 <select name="sex" value="sex">
                                            <option name="man" value="man" selected>남</option>
                                            <option name="woman" value="woman">여</option>
                                        </select>
                                            <br/>
                                            전화번호 <input type="text" name="phoneNum" /><br/>
                                            메일 <input type="text" name="email" />
                                        </div>
                                    </div>
                                    <div className="apply-form-second">
                                        <div className="second-box">
                                            <h2>참여 분야</h2>
                                            <div className="filed-box">
                                                생활 <input type="radio" name="field" value="life"/>
                                                게임 <input type="radio" name="field" value="game"/>
                                            </div>
                                            <div className="role-box">
                                                개발자 <input type="radio" name="role" value="develop"/>
                                                디자이너 <input type="radio" name="role" value="design"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="button-wrap">
                                        <button type="submit">신청하기</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

class ApplyResult extends React.Component {
    render() {
        return (
            <div>
                <h1>신청결과</h1>
                {this.props.persons.map(person => (
                    <div>
                        <div>이름 : {person.name}</div>
                        <div>학교 : {person.school}</div>
                        <div>학년 : {person.grade}</div>
                        <div>성별 : {person.sex}</div>
                        <div>전화번호 : {person.phoneNum}</div>
                        <div>이메일 : {person.email}</div>
                        <div>분야 : {person.field}</div>
                        <div>포지션 : {person.position}</div>
                    </div>
                ))}
            </div>
        );
    }
}
