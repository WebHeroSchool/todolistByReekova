import React from 'react';
import CardContent from '@material-ui/core/CardContent';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Octokit } from '@octokit/rest';
import styles from './About.module.css';
import classnames from 'classnames';
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

const octokit = new Octokit();

class About extends React.Component {
	state = {
		isLoading: true,
		repoList: [],
		user: [],
		isError: false,
		error: ''
	}

	componentDidMount() {
		octokit.repos.listForUser({
			username: 'mariarykova'
		}).then(({ data }) => {
			this.setState ({
				repoList: data,
				isLoading: false
			})
		})
		.catch(error => {
			this.setState({
				isLoading: false,
				isError: true,
				error: "Пользователь не найден"
			});
		});

		octokit.users.getByUsername({
            username: 'mariarykova'
        }).then(({ data }) => {
            this.setState({
                user: data,
                isLoading: false
            });
        })
            .catch(error => {
                this.setState({
                    isLoading: false,
                    isError: true,
                    error: "Пользователь не найден"
                });
            });
	}

	render() {
		const { isLoading, repoList, user, isError, error } = this.state;
		return (
			<CardContent>
			{isLoading
				? <CircularProgress />
				: <div className={styles.wrapper}>
						<div className={styles.wrapper_inner}>
							<img src={user.avatar_url} className={styles.avatar} alt="Maria Rykova"/>	
							<div>
								<h3>{user.name}</h3>
								<h3 className={styles.login}> #{user.login} </h3>
								<p>{user.bio}</p>

								<a href="###" target="_blank" className={styles.icon}><LinkedInIcon color="#000000" /></a>
								<a href="https://www.facebook.com/nigay.marie/" target="_blank" className={styles.icon}><FacebookIcon/></a>
								<a href="https://github.com/mariarykova" target="_blank" className={styles.icon}><GitHubIcon/></a>
							</div>	
						</div>				
						<h3 className={styles.title}>Мои репозтории на GitHub</h3>
							<ol>
							{repoList.map(repo => (<li key={repo.id} className={styles.list}>
								<a href={repo.html_url} className={styles.link}>{repo.name}</a>
								<p>{repo.description}</p>
								<p className={classnames({
									[styles.language]: true,
									[styles.html]: repo.language === 'HTML',
									[styles.css]: repo.language === 'CSS',
									[styles.js]: repo.language === 'JavaScript',
									[styles.no_lang]: repo.language === null
									})}>{repo.language}</p>
							</li>))}
							</ol>
					</div>
					}
				{isError && {error}}
			</CardContent>
		);
	};
}

export default About;
