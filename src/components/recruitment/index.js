import React, {Fragment, PureComponent} from 'react'
import sxxImg from '../../images/sxxbanner.png'
import FloatWin from '../../common/floatWindow'

export default class Recruitment extends PureComponent{
    state={
        tabStatus: '0',
        display: ''
    }

    handleChangeTab=(e)=>{
       this.setState({tabStatus:e.target.value})
    }
    render(){
        const {tabStatus}=this.state
        return (
            <div className="recruitment-container">
                <FloatWin />
                <div className="recruitment-banner">
                    <img src={sxxImg} alt=""/>
                </div>
                <div className="recruitment-content">
                    <div className='title'>人才招聘</div>
                    <div className="title-text">人尽其才 共同发展 </div>
                    <div className="recruitment-tab">
                        <ul className="tab-btn-group"  onClick={(e)=>{this.handleChangeTab(e)}}>
                            <li className={tabStatus=='0'?'active':null} value='0'>全部<span></span></li>
                            <li className={tabStatus=='1'?'active':null} value='1'>新媒体运营专员<span></span></li>
                            <li className={tabStatus=='2'?'active':null} value='2'>新媒体营销<span></span></li>
                            <li className={tabStatus=='3'?'active':null} value='3'>课程顾问<span></span></li>
                            <li className={tabStatus=='4'?'active':null} value='4'>项目执行<span></span></li>
                            <li className={tabStatus=='5'?'active':null} value='5'>产品助理<span></span></li>
                        </ul>
                    </div>
                    <div className="tab-content">
                        {tabStatus==0||tabStatus==1? <Fragment>
                            <div className="list">
                                新媒体运营专员
                                {/*<svg className='icon-svg'>
                                    <use xlinkHref='#icon-jiahaozhankai'></use>
                                </svg>*/}
                            </div>
                            <div className="list-content">
                                <div className="box">
                                    <div className="text">岗位职责:</div>
                                    <div className="text">1. 负责对公司新媒体矩阵的运营和推广工作，具有一定的组织能力，对平台营收负责;</div>
                                    <div className="text">2. 善于微信沟通，可以衡量并选择最有效的沟通方法，对用户数据指标负责;</div>
                                    <div className="text">3. 负责监测、搜集、整理和分析各种相关市场信息，及时了解和总结市场反馈；</div>
                                    <div className="text">4. 负责公司微信商城平台销售和运营监控，负责商品筛选和代理销售工作，对运营效果、结果、数据负责；</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">任职要求:</div>
                                    <div className="text">1. 熟悉微信公众平台及商务模式，从事微商运营2年以上，智能产品、图书、培训课程等商品从业者优先考虑；</div>
                                    <div className="text">2. 熟练使用有赞等微商后台，对运营模式有深刻的理解；</div>
                                    <div className="text">3. 有微信社群及小程序运营思维，熟悉微商运营，擅长微商引流、用户转化；</div>
                                    <div className="text">4. 对分销渠道熟悉，有资源者优先；</div>
                                    <div className="text">5. 工作敬业负责，主动积极，对自己负责，对工作负责，对公司负责。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">联系方式:</div>
                                    <div className="text">邮件标题注明：应聘 新媒体运营专员 </div>
                                    <div className="text">邮箱地址：xiangjun@sixuexing.com</div>
                                </div>
                            </div>
                        </Fragment>
                        :null
                        }
                        {tabStatus==0||tabStatus==2?
                        <Fragment>
                            <div className="list">
                                新媒体营销
                                {/*<svg className='icon-svg'>
                                    <use xlinkHref='#icon-jiahaozhankai'></use>
                                </svg>*/}
                            </div>
                            <div className="list-content">
                                <div className="box">
                                    <div className="text">岗位职责:</div>
                                    <div className="text">1. 负责以自媒体、微信、事件或话题传播等营销途径及手段，针对公司从事的行业、产品的种类，提出市场定位，制定出创意网络营销推广方案；</div>
                                    <div className="text">2. 负责制定营销推广方案的实施步骤和工作执行；</div>
                                    <div className="text">3. 追踪评估营销推广方案的实施情况，根据其效果进行适当的修改，以确保行之有效；</div>
                                    <div className="text">4. 对营销活动进行整体协调和把握，确定各类活动方案形成完成闭环，合理控制成本及预算把控；</div>
                                    <div className="text">5. 承担相关营销任务，对所负责领域营销结果负责；</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">任职要求:</div>
                                    <div className="text">1. 熟悉互联网和手机应用，良好的文字撰写、编辑能力；</div>
                                    <div className="text">2. 具敏锐的洞察力，2年以上策划运营工作经验，较强的营销能力及创新意识； </div>
                                    <div className="text">3. 能独立完成营销推广工作，并有成功案例；</div>
                                    <div className="text">4. 具备较强的组织、协调、沟通能力，具备出色的人际交往和社交能力；</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">联系方式:</div>
                                    <div className="text">邮件标题注明：应聘 新媒体营销 </div>
                                    <div className="text">邮箱地址：xiangjun@sixuexing.com</div>
                                </div>
                            </div>
                        </Fragment>
                            :null
                        }
                        {tabStatus==0||tabStatus==3?
                        <Fragment>
                            <div className="list">
                                课程顾问
                                {/*<svg className='icon-svg'>
                                    <use xlinkHref='#icon-jiahaozhankai'></use>
                                </svg>*/}
                            </div>
                            <div className="list-content">
                                <div className="box">
                                    <div className="text">岗位职责:</div>
                                    <div className="text">1. 负责指导学员了解课程，回答学员在线提出的问题，促成学员购买；</div>
                                    <div className="text">2. 了解学员需求，推荐适合课程，有效管理自己的学员，进行定期回访，促成订单；</div>
                                    <div className="text">3. 负责完成目标课程的销售KPI，并根据客户需求和市场变化，对公司的产品和服务提出建议。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">任职要求:</div>
                                    <div className="text">1. 具备良好的销售意识和电话沟通技巧，普通话流利，逻辑思维清晰；</div>
                                    <div className="text">2. 热爱销售，有较强的学习能力，踏实，专注，愿意为自我的提升付诸努力； </div>
                                    <div className="text">3. 热爱生活，有团队合作意识，适应活跃的团队气氛；</div>
                                    <div className="text">4. 有教育行业、金融保险、咨询工作经验者优先。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">联系方式:</div>
                                    <div className="text">邮件标题注明：应聘 课程顾问 </div>
                                    <div className="text">邮箱地址：xiangjun@sixuexing.com</div>
                                </div>
                            </div>
                        </Fragment>
                            :null
                        }
                        {tabStatus==0||tabStatus==4?
                        <Fragment>
                            <div className="list">
                                项目执行
                                {/*<svg className='icon-svg'>
                                    <use xlinkHref='#icon-jiahaozhankai'></use>
                                </svg>*/}
                            </div>
                            <div className="list-content">
                                <div className="box">
                                    <div className="text">岗位职责:</div>
                                    <div className="text">1. 完成和客户的对接，帮助客户解决除商务方面的问题，以及日常的媒体、商务、技术方面答疑；</div>
                                    <div className="text">2. 负责项目服务的沟通，协助销售团队为客户提供全方位的服务；</div>
                                    <div className="text">3. 负责与其他部门建立良好的合作关系，促进跨部门的有效沟通和及时响应。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">任职要求:</div>
                                    <div className="text">1. 了解互联网广告相关知识，具有大型广告、互联网公司经验者优先考虑；</div>
                                    <div className="text">2. 熟悉网络媒体广告投放执行流程，能够熟练使用广告位管理系统； </div>
                                    <div className="text">3. 良好的沟通协调能力、富有责任心、理解和接受能力强，亲和力强，诚实可靠；</div>
                                    <div className="text">4. 思维敏捷、能承担一定的工作压力，具有良好的团队合作精神；</div>
                                    <div className="text">5. 大专以上学历，熟练掌握办公软件。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">联系方式:</div>
                                    <div className="text">邮件标题注明：应聘 项目执行 </div>
                                    <div className="text">邮箱地址：xiangjun@sixuexing.com</div>
                                </div>
                            </div>
                        </Fragment>

                            :null
                        }
                        {tabStatus==0||tabStatus==5?
                        <Fragment>
                            <div className="list">
                                产品助理
                                {/*<svg className='icon-svg'>
                                    <use xlinkHref='#icon-jiahaozhankai'></use>
                                </svg>*/}
                            </div>
                            <div className="list-content">
                                <div className="box">
                                    <div className="text">岗位职责:</div>
                                    <div className="text">1、负责互联网/移动互联网产品策划；</div>
                                    <div className="text">2、需求管理：熟悉移动互联网项目，能够根据业务情况做项目需求分析，并提炼策划产品方案；</div>
                                    <div className="text">3、产品策划：撰写产品需求书及设计文档，制作高质量产品原型，协助开发团队理解产品功能；</div>
                                    <div className="text">4、跟进保证：跨部门协调和沟通，推动UI视觉、DEMO、研发等人员紧密合作达成产品研发或迭代目标；</div>
                                    <div className="text">5、用户体验：持续检测产品反馈，关注用户体验，提出产品优化和改进方案。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">任职要求:</div>
                                    <div className="text">1、 2年以上APP使用经验，擅长APP功能分析/策划；</div>
                                    <div className="text">2、 熟悉需求调研方法，较强的业务流程及业务模型分析设计能力；优秀的沟通能力，能快速把握需求的核心要点；</div>
                                    <div className="text">3、了解移动互联网产品整体实现过程，有敏锐的市场洞察能力，严密的逻辑分析能力，良好的沟通协作能力，以及一定的技术理解能力。</div>
                                    <div className="text">4、 有较强的文档编写能力，能够独立完成对产品的设计，撰写产品文档。包括产品原型（Axure原型、visio原型）、说明文档等。</div>
                                    <div className="text">5、需有较强的团队协作精神。有效的沟通技巧，在团队协作中具有精炼思维和解决复杂问题的能力，具备良好的学习能力，责任心强，能够承受较大的工作压力，自我学习能力强。</div>
                                </div>
                                <div className="box" style={{marginTop:'40px'}}>
                                    <div className="text">联系方式:</div>
                                    <div className="text">邮件标题注明：应聘 产品助理 </div>
                                    <div className="text">邮箱地址：xiangjun@sixuexing.com</div>
                                </div>
                            </div>
                        </Fragment>

                            :null
                        }
                    </div>
                </div>
            </div>
        )
    }
}
